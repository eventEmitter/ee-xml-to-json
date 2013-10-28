# ee-xml-to-json

description

## installation


## usage



{
	  Name: "name"
	, Prefix: "prefix"
	, Marker: "marker"
	, MayKeys: { name: "maxKeys", type: "number" }
	, Delimiter: "delimiter"
	, IsTruncated: { name: "truncated", type: "bool" }
	, Contents: { name: "contents", type: "array", contents: 
		{
			  Key: "key"
			, LastModified: { name: "modified", type: "date" }
			, ETag: "etag"
			, Size: { name: "size", type: "number" }
			, Owner: { type: "object", name: "owner", contents: {
				  ID: "id"
				, DisplayName: "name"
			} }
		}
	}
}