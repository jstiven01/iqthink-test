class Movie < ApplicationRecord
  validates_presence_of :title, :overview, :votes, :poster_url, :release_date, :mdb_id
  validates_uniqueness_of :mdb_id
end
