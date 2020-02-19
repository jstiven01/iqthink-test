require 'rails_helper'

RSpec.describe Movie, type: :model do
  # Validation tests
  # ensure columns title and created_by are present before saving
  it { should validate_presence_of(:title) }
  it { should validate_presence_of(:overview) }
  it { should validate_presence_of(:votes) }
  it { should validate_presence_of(:poster_url) }
  it { should validate_presence_of(:release_date) }
  it { should validate_presence_of(:mdb_id) }

  it { should validate_uniqueness_of(:mdb_id) }
end
