class AddFiltertoSearches < ActiveRecord::Migration[5.2]
  def change
    add_column :searches, :filter, :string
    add_column :searches, :start_date, :datetime
    add_column :searches, :final_date, :datetime
  end
end
