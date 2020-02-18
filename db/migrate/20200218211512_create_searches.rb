class CreateSearches < ActiveRecord::Migration[5.2]
  def change
    create_table :searches do |t|
      t.string :overview
      t.string :title
      t.integer :votes

      t.timestamps
    end
  end
end
