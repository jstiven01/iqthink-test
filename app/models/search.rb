class Search < ApplicationRecord
  def movies_search
    movies = Movie.all
    movies = movies.where(['lower(title) LIKE ?', "%#{title.downcase}%"]) if title.present?
    movies = movies.where(['lower(overview) LIKE ?', "%#{overview.downcase}%"]) if overview.present?
    movies = movies.where(['votes = ?', votes.to_s]) if votes.present?
    movies = movies.tomorrow_release if filter === 'tomorrow'
    movies = movies.next_week_release if filter === 'nextWeek'
    movies = movies.next_month_release if filter === 'nextMonth'
    movies = movies.custom_range(start_date, final_date) if filter === 'customRange'


    movies
  end
end
