Rails.application.routes.draw do
  root to: "static_pages#root"
    
  namespace :api, defaults: { format: :json } do
    resource :session, only:[:create, :destroy]
    resources :users
    resources :favorites, only: [:create, :destroy]
    resources :likes, only: [:create, :destroy]
    resources :songs, only:[:create, :destroy]
  end
end
