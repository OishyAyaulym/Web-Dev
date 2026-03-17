def centered_average(nums):
    total_sum = sum(nums)
    min_val = min(nums)
    max_val = max(nums)
    return (total_sum - min_val - max_val) // (len(nums) - 2)