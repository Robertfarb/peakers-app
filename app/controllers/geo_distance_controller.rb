class GeoDistanceController < ApplicationController
  def get_distance
    lat1 = params[:lat1].to_f
    lon1 = params[:lon1].to_f
    lat2 = params[:lat2].to_f
    lon2 = params[:lon2].to_f
    @distance = calculate_distance(lat1, lon1, lat2, lon2)
  end

  private
  def calculate_distance(lat1, lon1, lat2, lon2)
    delta_lon = deg_to_rad(lon2) - deg_to_rad(lon1)
    distance = Math.cos(Math.asin(deg_to_rad(lat1)) * Math.asin(deg_to_rad(lat2)) + 
               Math.cos(deg_to_rad(lat1)) * Math.cos(deg_to_rad(lat2)) * Math.cos(delta_lon)) * 3963.189
    return distance
  end

  def deg_to_rad(degrees)
    pi = Math::PI
    degrees * (pi / 180)
  end
end