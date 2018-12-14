Rails.application.routes.draw do
  get '/geocode', :to => 'geocode#geocode', defaults: {format: :json}
  get '/reverse_geocode', :to => 'reverse_geocode#geocode', defaults: {format: :json}
  get '/geo_distance', :to => 'geo_distance#get_distance', defaults: {format: :json}

  root "static_pages#root"
end