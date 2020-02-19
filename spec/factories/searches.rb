FactoryGirl.define do
  factory :search do
    title { Faker::Book.title }
    overview { Faker::Movie.quote }
    votes { rand(2500) }
  end
end
