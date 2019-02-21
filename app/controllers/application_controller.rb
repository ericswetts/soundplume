class ApplicationController < ActionController::Base

    helper_method :current_user, :signed_in?

    def current_user
        @current_user ||= User.find_by_session_token(session[:session_token])
    end

    def sign_in(user)
        @current_user = user
        session[:session_token] = @current_user.reset_token!
    end 

    def sign_out
        session[:session_token] = nil
        current_user.reset_token!
        redirect_to new_session_url
    end

    def signed_in?
        !!current_user
    end

    def require_signed_in
        redirect_to new_session_url unless logged_in?
    end

end

