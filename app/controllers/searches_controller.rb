class SearchesController < ApplicationController
  before_action :set_search, only: [:show]
  def create
    @search = Search.create!(search_params)
    json_response(@search)
  end

  def show
    json_response(@search.movies_search)
  end

  private

  def search_params
    # whitelist params
    params.permit(:title, :overview, :votes, :filter, :start_date, :final_date)
  end

  def set_search
    @search = Search.find(params[:id])
  end
end
