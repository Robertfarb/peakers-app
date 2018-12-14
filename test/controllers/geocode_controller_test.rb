class GeocodeControllerTest < ActionDispatch::IntegrationTest
  test  "should return a successful response" do
    get "/geocode"
    assert_response :success
  end

  test "should get geocode" do
    get "/geocode"
 
    assert_equal "geocode", @controller.action_name
    assert_equal "US-ASCII", @request.media_type
  end
end