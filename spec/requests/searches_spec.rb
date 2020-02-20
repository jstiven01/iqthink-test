require 'rails_helper'

RSpec.describe 'Search API', type: :request do
  # initialize test data
  let!(:movies) { create_list(:movie, 100) }
  let!(:searches) { create_list(:search, 10) }
  let(:search_id) { searches.first.id }

  # Test suite for GET /searches/:id
  describe 'GET /searches/:id' do
    before { get "/searches/#{search_id}" }

    context 'when the record exists' do
      it 'returns the search' do
        expect(json).to be_empty
      end

      it 'returns status code 200' do
        expect(response).to have_http_status(200)
      end
    end

    context 'when the record does not exist' do
      let(:search_id) { 100 }

      it 'returns status code 404' do
        expect(response).to have_http_status(404)
      end

      it 'returns a not found message' do
        expect(response.body).to match(/Couldn't find Search/)
      end
    end
  end

  # Test suite for POST /searches
  describe 'POST /searches' do
    # valid payload
    let(:valid_attributes) do
      {
        search: { title: 'Learn Elm', overview: 'Lorem Ipsum',
                  votes: 52 }
      }
    end

    context 'when the request is valid' do
      before { post '/searches', params: valid_attributes }

      it 'creates a search' do
        expect(json['title']).to eq('Learn Elm')
      end

      it 'returns status code 201' do
        expect(response).to have_http_status(200)
      end
    end
  end
end
