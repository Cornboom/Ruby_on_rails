require 'pg'
require 'sinatra'
require 'byebug'
require 'sinatra/reloader' if development?
require './todo.rb'

configure {set :server, :puma}

conn = PG.connection(dbname: 'Ruby', host: 'localhost',user: 'testuser2', password: '12345')

get '/' do
	"Flatstack"	
end

get '/todo' do
	@result = ToDo.all(conn)
	
	erb :index
end

get '/todo/new' do
	erb :new
end

get '/todo/:id/edit' do
	@result = ToDo.findById(conn, params['id'])
	
	erb :edit
end

get '/todo/:id' do
	@result = ToDo.findById(conn, params['id'])
	
	erb :show
end

post '/todo' do
	if params['custom_method'] == 'DELETE'
		ToDo.findById(conn, params['id']).delete(conn)
		
		redirect to('/todo')
	else
	
		todo = ToDo.new(params['title'])
		todo.save(conn)
		redirect to("/todo/#{todo.id}")
	end
end

post '/todo/:id' do
	id = params['id']
	if params['custom_method'] == 'PUT'
		ToDo.findById(conn, id).update(conn, params['title'])
		@result = id
		
	end

	redirect to("/todo/#{id}")
end

get '/test' do
	ToDo.where(conn, {id: 2, title: "tuctuc"})
end
