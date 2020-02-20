require 'rails_helper'

RSpec.describe Movie, type: :model do
  # Validation tests
  # ensure columns title and created_by are present before saving
  it {
    should validate_presence_of(:title)
      .with_message(/Title can't be blank/)
  }
  it {
    should validate_presence_of(:overview)
      .with_message(/Overview can't be blank/)
  }
  it {
    should validate_presence_of(:votes)
      .with_message(/Votes can't be blank/)
  }
  it {
    should validate_presence_of(:poster_url)
      .with_message(/Poster url can't be blank/)
  }
  it {
    should validate_presence_of(:release_date)
      .with_message(/Release date can't be blank/)
  }
  it {
    should validate_presence_of(:mdb_id)
      .with_message(/Mdb can't be blank/)
  }
end
