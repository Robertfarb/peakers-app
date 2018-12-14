class GeocodeControllerTest < ActionDispatch::IntegrationTest
  test  "should return a successful response" do
    get "/geocode"
    assert_response :success
  end

  test "get request should invoke GeocodeController #geocode method" do
    get "/geocode"
    assert_equal "geocode", @controller.action_name
  end

  test "should catch incorrect params" do
    get "/geocode?address=314342234234"
    response = JSON.parse(@response.body)
    assert_equal("ZERO_RESULTS", response["google_response"]["status"])
    assert_response :success
  end
end