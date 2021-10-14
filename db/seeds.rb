
# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
5.times do
  @user = User.create(
    name: Faker::Name.name,
    nickname: Faker::Superhero.name, 
    email: Faker::Internet.email
  )
  2.times do
    Event.create(
      title: Faker::Mountain.name,
      event_date: Faker::Date.in_date_period,
      details: Faker::Lorem.paragraph,
      image: Faker::Placeholdit.image,
      event_time:"11am"
    )
  end
  2.times do
    Item.create(
      food_name: Faker::Food.dish,
      complete: false,
      # user_id: user.id,
      # event_id: event.id
    )
  end
end
puts "Data Seeded Yo!"
@users = User.all
@events = Event.all
@items = Item.all
p @users
p @events
p @items

