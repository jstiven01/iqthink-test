class CreateMovies < ActiveRecord::Migration[5.2]
  def change
    create_table :movies do |t|
      t.string :title
      t.text :overview
      t.integer :votes
      t.string :poster_url
      t.datetime :release_date

      t.timestamps
    end
  end
end
