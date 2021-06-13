Rails.application.routes.draw do
  root 'home#index', as: 'home'
  get 'signup' => 'users#new'
  controller :sessions do
    get 'signin' => :new
    post 'signin' => :create
    delete 'logout' => :destroy
  end

  resources :users, only: [:create, :show, :index, :edit, :update, :destroy]
  resources :cards do
    resources :comments, only: [:create, :destroy]
  end
end
