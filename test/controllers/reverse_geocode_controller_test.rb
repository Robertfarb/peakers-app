class ReverseGeocodeControllerTest < ActionDispatch::IntegrationTest
  test  "should return a successful response" do
    get "/reverse_geocode"
    assert_response :success
  end
end