class ToDo

	attr_accessor :id, :title

	def initialize(title)
		@id = nil
		@title = title
	end

  def save(conn)
    @id = conn.exec("insert into todo(title) values('#{@title}') returning id")[0]['id']
  end

  def delete(conn)
    conn.exec("delete from todo where id = #{@id}")
  end

  def update(conn, title)
  		conn.exec("update todo set title='#{title}' where id=#{@id}")
  end

  def self.findById(conn, id)
  	res = conn.exec("select * from todo where id=#{id}")[0]
  	todo = self.new(res['title'])
  	todo.id = id
  	todo
  end

  def self.arr_map(arr_hashs)
  	res_hashs = []
		arr_hashs.each do |el| 
			todo = ToDo.new(el['title'])
			todo.id = el['id']
			res_hashs << todo
		end
		res_hashs
  end

	def self.all(conn)
		arr_hashs = conn.exec( "SELECT * FROM todo" )
		arr_map(arr_hashs)
	end

	def self.where(conn, params)
		sql = "SELECT id, title FROM todo where "
		params.each do |param|
			if (param[1].class == Integer) 
				sql += " #{param[0]} = #{param[1]} and"
			else
				sql += " #{param[0]} = '#{param[1]}' and"
			end
		end
		
		sql = sql.chomp(" and") + ';'
		arr_hashs = conn.exec(sql)
		arr_map(arr_hashs)
	end
end
