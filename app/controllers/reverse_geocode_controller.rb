class ReverseGeocodeController < ApplicationController
  def geocode
    @geo_results = reverse_geocode(params[:lat], params[:lon])
  end

  private
  def reverse_geocode(lat, lon)
    if (lat.to_i == 0) || (lon.to_i == 0)
      render json: {"error": "Please enter a valid input", 
                    "status": 422, 
                    "google_response": {"status": "BAD_REQUEST"}
                   }
    else
      response = RestClient::Request.execute(
        method: :get,
        url: "https://maps.googleapis.com/maps/api/geocode/json?latlng=#{lat},#{lon}
              &key=#{Rails.application.credentials.google_maps[:api_key]}"
      )
    end
  end
end