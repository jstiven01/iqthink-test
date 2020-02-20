class AddIndextoMovie < ActiveRecord::Migration[5.2]
  def change
    add_index :movies, :release_date
  end
end
