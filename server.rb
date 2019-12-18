# A "Proxy API" for accessing DarkSky
require "sinatra"
require "net/http"

require "sinatra/reloader" if development?
require "pry" if development? || test?

set :bind, '0.0.0.0'  # bind to all interfaces

DARK_SKY_API_KEY = "fde15eb7d5fca167948f3f39b9b4e1db"


get "/" do
  erb :index
end
get "/api/v1/forecast/:latitude,:longitude" do |latitude, longitude|
  uri = URI("https://api.darksky.net/forecast/#{DARK_SKY_API_KEY}/#{latitude},#{longitude}")
  return Net::HTTP.get(uri)
end
