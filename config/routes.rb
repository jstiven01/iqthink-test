Rails.application.routes.draw do
  root 'homepage#index'
  resources :movies
  resources :searches
  get '*path', to: 'homepage#index'
end
