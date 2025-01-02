elves = []  # List of calories each elf is carrying

# Open file in read mode
with open("day1/input.txt", "r") as f:
    # Counter variable to keep track of current elf calories
    current_elf_calories = 0
    # Using a while loop, read each line
    while True:
        # Read line
        line = f.readline()

        # If line is blank push current elf's calories to the list and continue reading the next one and reset the counter
        if line == "\n":
            elves.append(current_elf_calories)
            current_elf_calories = 0
        # If end of file, break out of the loop
        elif not line:
            elves.append(current_elf_calories)
            break
        # Else add the current line value to the current elf's calorie count
        else:
            current_elf_calories += int(line)

# Now that we have our parsed data, we can go about solving both the problems

################################## PART 1 ##################################
highest_calorie_elf = 0  # index of the elf having the most calories
# Finding the max number of calories
for i in range(len(elves)):
    # If elf at i has more calories than the previously stored index, update the stored index
    if elves[i] > elves[highest_calorie_elf]:
        highest_calorie_elf = i
# Print the values for the elf carrying most calories
print(
    "Elf number",
    highest_calorie_elf + 1,
    "is carrying the most calories, having",
    elves[highest_calorie_elf],
    "calories in total!",
)

################################## PART 2 ##################################
# We just sort the list for the top three elves (doing manually because list.sort() is too easy)
# Linear sort
for i in range(len(elves)):
    for j in range(i, len(elves)):
        if elves[i] < elves[j]:
            # The cool python way of swapping values without a temp variable
            elves[i], elves[j] = elves[j], elves[i] 

# add and print top x elves
sum_calories = 0
count = 3 # change this to calculate however many we want to add
for i in range(count):
    sum_calories += elves[i]

print("The sum of calories carried by the top three elves is", sum_calories)
