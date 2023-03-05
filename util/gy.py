def some_function(numbers):
    val = numbers[0]
    i = 0
    while i < len(numbers):
        if numbers[i] > val:
            val = numbers[i]
        i += 1
    return val
