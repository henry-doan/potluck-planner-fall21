
# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
10.times do
  @user = User.create(
    name: Faker::Name.name,
    nickname: Faker::Superhero.name, 
    email: Faker::Internet.email,
    password: '123456'
  )

  Event.create( title: 'DevPoint Graduation Lunch', event_date: 'Saturday, November 6', details: 'We did it! Celebrate with a feast fit for coding royalty.', image: 'https://res.cloudinary.com/dialoulou/image/upload/v1635377842/Potluck%20Planner%20Project/klara-kulikova-5eoiyhGLFb4-unsplash_zcelpn.jpg', event_time: '12:00PM-2:00PM')
  Event.create( title: 'Taco Tuesday Friendsgiving', event_date: 'Tuesday, November 23', details: 'Food, fun and friends. What more could you ask for?', image: 'https://res.cloudinary.com/dialoulou/image/upload/v1635377073/Potluck%20Planner%20Project/jeswin-thomas-z_PfaGzeN9E-unsplash_qphnff.jpg', event_time: '5:00PM-8:00PM')
  Event.create( title: 'Halloween Party', event_date: 'Sunday, October 31', details: 'Bring your favorite hauntingly delicious treats. Wear your favorite superhero costume!', image: 'https://res.cloudinary.com/dialoulou/image/upload/v1635377721/Potluck%20Planner%20Project/sheri-silver-9IW9vsM0vz8-unsplash_ygpdwi.jpg', event_time: '7:00 PM-10:00 PM')
  Event.create( title: 'Birthday Celebration for YiaYia', event_date: 'December 3', details: 'Join us in celebrating YiaYia with some of her favorite holiday dishes.', image: 'https://res.cloudinary.com/dialoulou/image/upload/v1635377746/Potluck%20Planner%20Project/bryony-elena-N4b3Q1mfPWU-unsplash_tqzhf2.jpg', event_time: '5:00 PM-8:00 PM')
  
end

Item.create( food_name: 'Steak picado', complete: 'false', user_id: rand(1..10), event_id: 2)
Item.create( food_name: 'Tortillas', complete: 'false', user_id: rand(1..10), event_id: 2)
Item.create( food_name: 'Cheese', complete: 'false', user_id: rand(1..10), event_id: 2)
Item.create( food_name: 'Grilled peppers and onions', complete: 'false', user_id: rand(1..10), event_id: 2)
Item.create( food_name: 'Pico de gallo', complete: 'false', user_id: rand(1..10), event_id: 2)
Item.create( food_name: 'Sushi', complete: 'false', user_id: rand(1..10), event_id: 1)
Item.create( food_name: 'Pizza', complete: 'false', user_id: rand(1..10), event_id: 1)
Item.create( food_name: 'Chocolate chip donuts', complete: 'false', user_id: rand(1..10), event_id: 1)
Item.create( food_name: 'Salad', complete: 'false', user_id: rand(1..10), event_id: 1)
Item.create( food_name: 'Chicken wings', complete: 'false', user_id: rand(1..10), event_id: 3)
Item.create( food_name: 'Loaded cheese fries', complete: 'false', user_id: rand(1..10), event_id: 3)
Item.create( food_name: 'Ice cream', complete: 'false', user_id: rand(1..10), event_id: 3)
Item.create( food_name: 'Jack-o-lantern cake', complete: 'false', user_id: rand(1..10), event_id: 3)
Item.create( food_name: 'Lasagna', complete: 'false', user_id: rand(1..10), event_id: 4)
Item.create( food_name: 'Apple cider', complete: 'false', user_id: rand(1..10), event_id: 4)
Item.create( food_name: 'Sauteed mixed greens', complete: 'false', user_id: rand(1..10), event_id: 4)
Item.create( food_name: 'Shrimp kebobs', complete: 'false', user_id: rand(1..10), event_id: 4)
Item.create( food_name: 'Gingerbread poundcake', complete: 'false', user_id: rand(1..10), event_id: 4)

Comment.create( subject: 'Arrival Time', body: 'Will drop off the morning of the event.', author: User.find(rand(1..10)).name, item_id: 5 )
Comment.create( subject: 'Quantity', body: 'Bringing enough for 10 guests', author: User.find(rand(1..10)).name, item_id: 12)


puts "Data Seeded!"

@users = User.all
@events = Event.all
@items = Item.all
p @users
p @events
p @items

