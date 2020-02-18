class Movie < ApplicationRecord
    validates_presence_of :title, :overview, :votes, :poster_url, :release_date
end
