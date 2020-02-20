class Movie < ApplicationRecord
  validates_presence_of :title, :overview, :votes, :poster_url, :release_date, :mdb_id
  validates_uniqueness_of :mdb_id
  default_scope -> { order(release_date: :asc) }
  scope :tomorrow_release, -> { where('release_date >= ? AND release_date <= ?', Time.now.tomorrow.beginning_of_day, Time.now.tomorrow.end_of_day) }
  scope :next_week_release, -> { where('release_date >= ? AND release_date <= ?', Time.now.next_week, Time.now.next_week.end_of_week) }
  scope :next_month_release, -> { where('release_date >= ? AND release_date <= ?',  Time.now.next_month.beginning_of_month, Time.now.next_month.end_of_month) }

  class << self
    def custom_range(start_date, final_date)
      self.where('release_date >= ? AND release_date <= ?', start_date, final_date)
    end
  end
end
