# ASSESSMENT 4: Ruby Coding Practical Questions
# MINASWAN ✌️

# --------------------1) Create a method that takes in a number and determines if the number is even or odd. Use the test variables provided.

num1 = 7
# Expected output: '7 is odd'
num2 = 42
# Expected output: '42 is even'
num3 = 221
# Expected output: '221 is odd'

def show_odds number
        if number % 2 == 0
            "#{number} is even"
        elsif number % 2 != 0
            "#{number} is odd"
        end
    end

p show_odds (num1)
p show_odds (num2)
p show_odds (num3)



# -------------------2) Create a method that takes in a string and removes all the vowels from the string. Use the test variables provided. 
# HINT: Check out this resource: https://ruby-doc.org/core-2.6/String.html#method-i-delete

beatles_album1 = 'Rubber Soul'
# Expected output: 'Rbbr Sl'
beatles_album2 = 'Sgt Pepper'
# Expected output: 'Sgt Pppr'
beatles_album3 = 'Abbey Road'
# Expected output: 'bby Rd'

def delete_vowels string
    string.delete "aeiouAEIOU"
end

p delete_vowels (beatles_album1)
p delete_vowels (beatles_album2)
p delete_vowels (beatles_album3)


# -------------------3) Create a method that takes in a string and checks if the string is a palindrome. A palindrome is the same word spelled forward or backward. Use the test variables provided.

palindrome_tester1 = 'Racecar'
# Expected output: 'Racecar is a palindrome'
palindrome_tester2 = 'LEARN'
# Expected output: 'LEARN is not a palindrome'
palindrome_tester3 = 'Rotator'
# Expected output: 'Rotator is a palindrome'

def palindrome_word string
    if string.downcase != string.downcase.reverse
        "#{string} is not a palindrome"
    elsif string.downcase == string.downcase.reverse
        "#{string} is a palindrome"
    end
end

p palindrome_word (palindrome_tester1)
p palindrome_word (palindrome_tester2)
p palindrome_word (palindrome_tester3)