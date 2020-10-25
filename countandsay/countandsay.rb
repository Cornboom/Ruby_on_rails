def next_number(str)
	i=0
	result=""
	while i < str.length
		k=1
		while(i+1<str.length) and (str[i]==str[i+1])
			k+=1
			i+=1
		end
		result = result+"#{k}"+"#{str[i]}"
		i+=1
	end
	return result
end

def count_and_say(num)
	puts str='1'
	for i in 0...num-1
		str = next_number(str)
		puts str
	end
end

puts"введите номер числа последовательности"
input=gets.chomp.to_i
if input>0 
	puts
	count_and_say(input)
end
