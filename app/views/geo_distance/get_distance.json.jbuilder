json.set! "geo_distance" do
  json.lat1 params[:lat1].to_f
  json.lon1 params[:lon1].to_f
  json.lat2 params[:lat2].to_f
  json.lon2 params[:lon2].to_f
  json.distance @distance
end