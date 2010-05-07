require "rubygems"
require "sinatra"

get '/' do
	erb :tictactoe
end

get '/tictactoe' do
	erb :tictactoe
end

get '/hangman' do
	erb :hangman
end

get '/bingo' do
	erb :bingo
end

get '/scramble' do
	erb  :scramble
end
