# クイックソートを実装
# 10この乱数の配列を作成
# require 'pry'
# def randon_int
#   (Random.rand * 100).to_i
# end

# def divid_three_conponent(ary_nums)
#   return ary_nums if ary_nums.length <= 1
#   left_content  = []
#   right_content = []

#   pivot_index = ary_nums.length / 2
#   ary_nums.each_with_index do |_, n|
#     next if n == pivot_index
#     ary_nums[n] < ary_nums[pivot_index] ? left_content << ary_nums[n] : right_content << ary_nums[n]
#   end
#   return divid_three_conponent(left_content) + [ary_nums[pivot_index]] + divid_three_conponent(right_content)
# end

# ary = []
# randon_int.times { ary << randon_int }

# puts "初期配列: #{ary}"

# p "並び替え配列: #{divid_three_conponent(ary)}"

def random_init
  (Random.rand * 100).to_i
end

def quick_sort(ary)
  return ary if ary.size <= 1
  left = []
  right = []
  pivot = ary.length / 2
  ary.each_with_index do |_, i|
    next if i == pivot
    ary[i] < ary[pivot] ? left << ary[i] : right << ary[i]
  end
  return quick_sort(left) + [ary[pivot]] + quick_sort(right)
end

ary = []

random_init.times { ary << random_init }

p quick_sort(ary)



