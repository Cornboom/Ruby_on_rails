require "sinatra"
require "byebug"
require "sinatra/reloader" if development?
require "pg"

configure{set: server, :puma}

connection = PG.connection(dbname: "Ruby", host: "localhost", user: "testuser2", password: "12345")

get "/" do 
	"FlatStack"

end

get "/todo" do

@results = connection.exec("SELECT * FROM App")

erb :index
end

get "/todo/new" do
erb :new
end

get "/todo/:id/edit" do
@result = connection.exec("SELECT * FROM App WHERE id=#{params['id']}")[0]

erb :edit
end

get "/todo/:id" do
@result = connection.exec("SELECT * FROM App WHERE id=#{params['id']}")[0]

erb :show
end



post "/todo" do

if params["custom_method"] == "DELETE"
result = connection.exec("DELETE FROM App WHERE id=#{params['id']}")

redirect to("/todo")

else

result = connection.exec("INSERT INTO App (title) VALUES ('#{params["title"]}') RETURNING id")
id = result[0]["id"]

redirect to("/todo/#{id}")
end
end





post "/todo/:id" do

if params["custom_method"] == "PUT"
result = connection.exec("UPDATE todo SET title='#{params['title']}' WHERE id=#{params['id']}")
id = params["id"]

redirect to("/todo/#{id}")
end
end
