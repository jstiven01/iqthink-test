Rails.application.routes.draw do
  root 'homepage#index'
  resources :movies
  get '*path', to: 'homepage#index'
end
