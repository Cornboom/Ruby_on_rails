Rails.application.routes.draw do
  root 'posts#index', as: 'home' # основная страница

  get 'about' => 'pages#about', as: 'about' # другая страница

  resources :posts do  
    resources :comments
  end
end
