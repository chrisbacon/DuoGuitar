# ruby script to turn text tab into my tab format. Note only works at present if tab is in standard tuning and each line starts with that string's open pitch (ie 'E').

# copy the text of the file you want to convert into a .txt file in this folder called "to_tab.txt", or rename in this file appropriately. cd to this folder in terminal and run this script, the formatted file should appear as "output_file.txt".

lines_original_file_arr = []

eH = []
b = []
g = []
d = []
a = []
eL = []

strings_arrs_arr = [[], [], [], [], [], []]

File.open("to_tab.txt").each do |line|
  lines_original_file_arr.push(line.chomp)
end

lines_original_file_arr.each_with_index do |item, i|
  if ( lines_original_file_arr[i][0] == "E" && lines_original_file_arr[i+1][0] == "B" && lines_original_file_arr[i+2][0] == "G" )
    strings_arrs_arr[0].push lines_original_file_arr[i]
    strings_arrs_arr[1].push lines_original_file_arr[i+1]
    strings_arrs_arr[2].push lines_original_file_arr[i+2]
    strings_arrs_arr[3].push lines_original_file_arr[i+3]
    strings_arrs_arr[4].push lines_original_file_arr[i+4]
    strings_arrs_arr[5].push lines_original_file_arr[i+5]
  end
end

strings_strings_arr = []

strings_arrs_arr.each_with_index do |arr, i|
  strings_strings_arr[i] = arr.join()
end

final_string = strings_strings_arr.join("break")

puts final_string

File.open('output_file.txt', 'w') do |output|
  output.puts final_string
end
