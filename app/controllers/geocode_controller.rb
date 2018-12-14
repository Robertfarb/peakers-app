class GeocodeController < ApplicationController
  def geocode
    @geo_response = geocode_address(params[:address])
  end

  private
  def geocode_address(address)
    response = RestClient::Request.execute(
      method: :get,
      url: "https://maps.googleapis.com/maps/api/geocode/json?address=10790%20Wilshire%20Blvd&key=$#{Rails.application.credentials.google_maps[:api_key]}"
    )   
  end
end