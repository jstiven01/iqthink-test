FactoryGirl.define do
  factory :movie do
    title { Faker::Book.title }
    overview { Faker::Movie.quote }
    votes { rand(2500) }
    poster_url { UiFaces.face }
    release_date { Faker::Date.between(from: 15.days.ago, to: Date.today) }
    mdb_id { rand(250_000_000) }
  end
end
