class GeodistanceControllerTest < ActionDispatch::IntegrationTest
  test  "should return a successful response" do
    get "/geo_distance"
    assert_response :success
  end
end