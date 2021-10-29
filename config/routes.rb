Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  namespace :api do
    resources :users, only: :update
    
    resources :events do
      resources :items  
    end

    resources :items do
      resources :comments  
    end

    get 'userItems/:id', to: 'users#userItems'
    get 'userEvents/:id', to: 'users#userEvents'
    get 'eventUsers/:id', to: 'events#eventUsers'
    get 'findItem/:user_id/:event_id', to: 'items#findItem'
    get 'eventItems/:event_id', to: 'items#eventItems'
    get 'grabAssignedItems/:id', to: 'items#grabAssignedItems'
    get 'FriendForm', to: 'friendForm'
  end

end
