class User < ApplicationRecord

    validates :username, :email, :session_token, presence: true, uniqueness: true
    validates :password, length: {minimum: 6, allow_nil: true}

    attr_reader :password

    after_initialize :ensure_token


    def self.find_by_credentials(username, password)
        user = User.find_by(username:username)
        user && user.is_password?(password) ? user : nil 
    end 

    def ensure_token
        self.session_token ||= SecureRandom.urlsafe_base64
    end

    def reset_token!
        self.session_token = SecureRandom.urlsafe_base64
        self.save!
        self.session_token
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(pasword)
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

end
