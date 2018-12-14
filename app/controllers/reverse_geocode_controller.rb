class ReverseGeocodeController < ApplicationController
  def geocode
    @geo_results = reverse_geocode(params[:lat], params[:lon])
  end

  private
  def reverse_geocode(lat, lon)
    response = RestClient::Request.execute(
      method: :get,
      url: "https://maps.googleapis.com/maps/api/geocode/json?latlng=#{lat},#{lon}
            &key=#{Rails.application.credentials.google_maps[:api_key]}"
    )   
  end
end