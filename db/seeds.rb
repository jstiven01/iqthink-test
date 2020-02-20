# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

500.times do |i|
    Movie.create(
        title:  Faker::Book.title ,
        overview: Faker::Movie.quote ,
        votes:  rand(2500) ,
        poster_url:  UiFaces.face ,
        release_date:  Faker::Date.between(from: 15.days.ago, to: Date.today + 1000.days) ,
        mdb_id:  rand(2500) 
    )
end
