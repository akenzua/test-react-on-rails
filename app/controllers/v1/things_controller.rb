class V1::ThingsController < ApplicationController
    def index
        render json: { :things => [
        {
            :name => 'some-thing',
            :guid => '975879764655858585873889'
        }
        ]}.to_json
    end
end