class GeodistanceControllerTest < ActionDispatch::IntegrationTest
  test  "should return a successful response" do
    get "/geo_distance"
    assert_response :success
  end

  test "should correctly handle invalid lat / lon inputs" do
    get "/geo_distance?lat1=asdf&lon1=asdf&lat2=asdf&lon2=asdf"
    response = JSON.parse(@response.body)
    assert_equal("Please enter valid latitude and longitude", response["geo_distance"]["distance"])
    assert_response :success
  end
end