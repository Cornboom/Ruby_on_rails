class linkedList 
	def initialize(head=nil, *rest)
		@head=head

		if rest.first.is_a?(linkedList)
			@tail = rest.first
		elsif rest.any?
			@tail = linkedList.new(*rest)
		end
	end

	def <<(head)
		@head ? linkedList.new(head,self) : linkedList.new(head)
	end

	def inspect
		[@head, @tail].compact
	end

	def each (&block)
		yield @head if @head
		@tail.each(&block) if @tail
	end
end

 module DIYEnumerable 
 	def count
 		result = 0
 		each {|element| result+= 1}
 		result
 	end
 end

module DIYEnumerable
	def map 
		result = linkedList.new
		each {|element| result << yield(element)}
		result
	end
end
				
