class ReverseGeocodeControllerTest < ActionDispatch::IntegrationTest
  test  "should return a successful response" do
    get "/reverse_geocode"
    assert_response :success
  end

  test "get request should invoke ReverseGeocodeController #geocode method" do
    get "/reverse_geocode"
    assert_equal "geocode", @controller.action_name
  end

  test "should catch incorrect params" do
    get "/geocode?lat=abcdef&lon=asdfads"
    response = JSON.parse(@response.body)
    assert_equal("ZERO_RESULTS", response["google_response"]["status"])
    assert_response :success
  end
end