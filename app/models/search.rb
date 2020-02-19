class Search < ApplicationRecord
  def movies_search
    movies = Movie.all
    movies = movies.where(['lower(title) LIKE ?', "%#{title.downcase}%"]) if title.present?
    movies = movies.where(['lower(overview) LIKE ?', "%#{overview.downcase}%"]) if overview.present?
    movies = movies.where(['votes = ?', votes.to_s]) if votes.present?

    movies
  end
end
