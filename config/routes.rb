Rails.application.routes.draw do
  resources :geocode, only: [:index]
  resources :reverse_geocode, only: [:index]
  resources :get_distance, only: [:index]

  root "static_pages#root"
end